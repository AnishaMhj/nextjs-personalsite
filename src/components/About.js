import React from "react";
import { useState, useEffect, useRef } from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import Image from "next/image";
import AnimateText from "./AnimateText";
import { ref } from "yup";

const AboutComponentAcumen = {
  AboutAcumen: function AboutAcumen({ heading, content }) {
    if (heading == "paragraph") {
      return <p>{content}</p>;
    }
    return (
      <div className='flex items-center text-personal_blue-text my-2'>
        <HiArrowCircleRight />
        <p>&nbsp;{content}</p>
      </div>
    );
  },
};
function About({ useOnScreen, profile }) {
  const [ref, visible] = useOnScreen({ rootMargin: "-10px" });
  const { blogImage } = profile[0].fields;
  const data = profile[0].fields.workDescription.content;
  console.log(profile[0].fields.workDescription.content);
  const result = data.map((d) => ({
    heading: d.nodeType,
    content: d.content[0].value,
  }));
  return (
    <section
      ref={ref}
      id='about'
      className='px-4 pb-20 lg:px-48 bg-personal_blue'
    >
      {visible && (
        <AnimateText headingCount={1} mainHeading={"Abhishekh Maharjan"} />
      )}
      <div className='grid grid-cols-1 xl:grid-cols-3'>
        <div className='pt-16 h-72 '>
          <div className='relative h-44 w-44  md:w-60 md:h-60 xl:w-72 xl:h-72 m-auto lg:m-0'>
            <div className='absolute top-4 left-4 w-44 h-44 rounded-2xl md:left-2 md:top-2 md:w-60 md:h-60 xl:w-72 xl:h-72 border border-personal_blue-text'></div>
            <div className='absolute w-44 h-44 rounded-2xl md:w-60 md:h-60 xl:w-72 xl:h-72 bg-personal_blue-text bg-opacity-25 z-50 '></div>
            <div className='absolute w-44 h-44 md:w-60 md:h-60 xl:w-72 xl:h-72 '>
              <Image
                className='rounded-2xl object-cover'
                src={`https:${blogImage.fields.file.url}`}
                alt='Abhishekh Maharjans Photo'
                layout='fill'
              />
            </div>
          </div>
        </div>
        <div className='md:pt-14 text-personal_blue-textParagraph lg:col-span-2'>
          <p className='font-extrabold text-personal_blue-text '>{`<Hello there />`}</p>
          {result.map((r, i) => {
            return (
              <AboutComponentAcumen.AboutAcumen
                key={i}
                heading={r.heading}
                content={r.content}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
