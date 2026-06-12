import { useState, useRef, useEffect } from "react";
import styles from "./PopularCourse.module.css";

const courses = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=220&fit=crop",
    category: "UI/UX Design",
    price: "$250",
    title: "UI/UX Design | How to Design with professional",
    lessons: 24,
    classType: "Online Class",
    stars: 5,
    votes: 36,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=220&fit=crop",
    category: "UI/UX Design",
    price: "$250",
    title: "PHP Programming | Develop your Own skills.",
    lessons: 24,
    classType: "Online Class",
    stars: 5,
    votes: 20,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=220&fit=crop",
    category: "UI/UX Design",
    price: "$250",
    title: "Mathematics | Learn easily with best techniq.",
    lessons: 24,
    classType: "Online Class",
    stars: 5,
    votes: 45,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=220&fit=crop",
    category: "UI/UX Design",
    price: "$250",
    title: "Java Script | Why you become a Programmer?",
    lessons: 24,
    classType: "Online Class",
    stars: 5,
    votes: 54,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1565022536102-f7645c84354a?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "UI/UX Design",
    price: "$250",
    title: "English Language | Easy method english learn.",
    lessons: 24,
    classType: "Online Class",
    stars: 5,
    votes: 32,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&h=220&fit=crop",
    category: "UI/UX Design",
    price: "$250",
    title: "Digital Marketing | Best Online Course.",
    lessons: 24,
    classType: "Online Class",
    stars: 5,
    votes: 64,
  },
];

const StarRating = ({ count }) => (
  <div className={styles.starContainer}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={`${styles.star} ${i < count ? styles.starActive : styles.starInactive}`}
      >
        ★
      </span>
    ))}
  </div>
);

const CourseCard = ({ course }) => {
  return (
    <div className={styles.card}>
      {/* Thumbnail */}
      <div className={styles.thumbnailWrapper}>
        <img
          src={course.image}
          alt={course.title}
          className={styles.thumbnail}
        />
      </div>

      {/* Card Body */}
      <div className={styles.cardBody}>
        {/* Category + Price */}
        <div className={styles.cardHeader}>
          <span className={styles.badge}>{course.category}</span>
          <span className={styles.price}>{course.price}</span>
        </div>

        {/* Title */}
        <h3 className={styles.title}>{course.title}</h3>

        {/* Lesson + Class Type */}
        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <span className={styles.metaDotRed} />
            <span className={styles.metaText}>{course.lessons} Lesson</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaDotOrange} />
            <span className={styles.metaText}>{course.classType}</span>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Stars + Votes + Arrow */}
        <div className={styles.cardFooter}>
          <div className={styles.starsWrapper}>
            <StarRating count={course.stars} />
            <span className={styles.votesText}>{course.votes} Votes</span>
          </div>

          {/* Arrow Button */}
          <button className={styles.arrowBtn}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const SORT_OPTIONS = [
  { label: "Relevance", value: "relevance" },
  { label: "Most Votes", value: "votes_desc" },
  { label: "Least Votes", value: "votes_asc" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
];

function getSortedCourse(list, sortKey) {
  const arr = [...list];
  switch (sortKey) {
    case "votes_desc":
      return arr.sort((a, b) => b.votes - a.votes);
    case "votes_asc":
      return arr.sort((a, b) => a.votes - b.votes);
    case "price_asc":
      return arr.sort(
        (a, b) =>
          parseFloat(a.price.replace("$", "")) -
          parseFloat(b.price.replace("$", ""))
      );
    case "price_desc":
      return arr.sort(
        (a, b) =>
          parseFloat(b.price.replace("$", "")) -
          parseFloat(a.price.replace("$", ""))
      );
    default:
      return arr;
  }
}

export default function PopularCourse() {
  const [sortKey, setSortKey] = useState("relevance");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const activeLabel = SORT_OPTIONS.find((o) => o.value === sortKey)?.label;
  const sortedCourses = getSortedCourse(courses, sortKey);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className={styles.section}>
      {/* Header Row */}
      <div className={styles.headerRow}>
        {/* Title + Subtitle */}
        <div className={styles.titleWrapper}>
          <h2 className={styles.sectionTitle}>Our Popular Courses</h2>
          <p className={styles.sectionSubtitle}>
            Online education platform is very easy way to learn anything from
            anywhere, Now a days.
          </p>
        </div>

        {/* Sort Dropdown */}
        <div ref={dropdownRef} className={styles.dropdownContainer}>
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className={`${styles.dropdownBtn} ${dropdownOpen ? styles.dropdownBtnOpen : ""
              }`}
          >
            {/* Up chevron */}
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#555"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
            Sort by {activeLabel}
            {/* Down chevron */}
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#555"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ""
                }`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className={styles.dropdownMenu}>
              {SORT_OPTIONS.map((option) => {
                const isActive = sortKey === option.value;
                return (
                  <div
                    key={option.value}
                    onClick={() => {
                      setSortKey(option.value);
                      setDropdownOpen(false);
                    }}
                    className={`${styles.dropdownOption} ${isActive ? styles.dropdownOptionActive : ""
                      }`}
                  >
                    <span className={styles.checkmarkWrapper}>
                      {isActive && (
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FFA800"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </span>
                    {option.label}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Course Grid */}
      <div className={styles.grid}>
        {sortedCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}