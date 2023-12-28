import React from "react";

const SectionOne = ({isUkrainian}) => {
    return(
    <section className="section-one">
            <h1 className="main-title">{isUkrainian ? 'Докладні описи мов програмування та фреймворків' : 'Detailed descriptions of programming languages and frameworks'}</h1>
            <p>
              {isUkrainian
                ? 'Ласкаво просимо на мою сторінку, призначену для всіх, хто цікавиться програмуванням. Тут ви знайдете вичерпні та доступні описи різних мов програмування та фреймворків, які допоможуть вам глибше розібратися в їх функціональності та застосуванні. Вивчайте, експериментуйте та розширюйте свої знання!'
                : 'Welcome to my page, designed for everyone interested in programming. Here you will find comprehensive and accessible descriptions of various programming languages and frameworks to help you better understand their functionality and application. Learn, experiment, and expand your knowledge!'}
            </p>
          </section>
    )
}

export default SectionOne;