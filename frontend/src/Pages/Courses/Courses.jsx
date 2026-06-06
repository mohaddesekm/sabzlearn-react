import Topbar from '../../Components/Topbar/Topbar';
import Navbar from '../../Components/Navbar/Navbar';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Footer from '../../Components/Footer/Footer';
import CourseBox from '../../Components/CourseBox/CourseBox';

import './Courses.css';
import { useEffect, useState } from 'react';

export default function Courses() {
    // const [courses, setCourses] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:3000/v1/courses`)
    //         .then((res) => res.json())
    //         .then((allCourses) => {
    //             console.log(allCourses);
    //             setCourses(allCourses);
    //         });
    // }, []);

    return (
        <>
            <Topbar />
            <Navbar />

            <Breadcrumb
                links={[
                    { id: 1, title: 'خانه', to: '' },
                    {
                        id: 2,
                        title: 'تمامی دوره ها',
                        to: 'courses',
                    },
                ]}
            />

            {/* <!--------------------------------  Courses-Section  --------------------------------> */}
            <section className="courses">
                <div className="container">
                    <div className="courses-content">
                        <div className="container">
                            <div className="row">
                                <CourseBox
                                    src="images/courses/js_project.png"
                                    title="پروژه های تخصصی با جاوااسکریپت"
                                    teacher="محمدامین سعیدی راد"
                                />
                                <CourseBox
                                    src="images/courses/jango.png"
                                    title="دوره پروژه محور متخصص جنگو"
                                    teacher="رضا دولتی"
                                />
                                <CourseBox
                                    src="images/courses/nodejs.png"
                                    title="API نویسی با nodejs"
                                    teacher="محمدامین سعیدی راد"
                                />
                                <CourseBox
                                    src="images/courses/youtuber.png"
                                    title="دوره یوتیوبر تخصصی"
                                    teacher="حمیدرضا عبادی"
                                />
                                <CourseBox
                                    src="images/courses/python.png"
                                    title="مصورسازی داده با پایتون"
                                    teacher="رضا دولتی"
                                />
                                <CourseBox
                                    src="images/courses/freelancer.png"
                                    title="دوره پروژه های فریلنسری"
                                    teacher="قدیر یلمه"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="courses-pagination">
                        <ul className="courses__pagination-list">
                            <li className="courses__pagination-item">
                                <a
                                    href="#"
                                    className="courses__pagination-link"
                                >
                                    <i className="fas fa-long-arrow-alt-right courses__pagination-icon"></i>
                                </a>
                            </li>
                            <li className="courses__pagination-item">
                                <a
                                    href="#"
                                    className="courses__pagination-link courses__pagination-link--active"
                                >
                                    1
                                </a>
                            </li>
                            <li className="courses__pagination-item">
                                <a
                                    href="#"
                                    className="courses__pagination-link"
                                >
                                    2
                                </a>
                            </li>
                            <li className="courses__pagination-item">
                                <a
                                    href="#"
                                    className="courses__pagination-link"
                                >
                                    3
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!--------------------------------  Courses-Section  --------------------------------> */}

            <Footer />
        </>
    );
}
