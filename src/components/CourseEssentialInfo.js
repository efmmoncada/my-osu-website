/*
 * This file contains a component to render essential information about a
 * specific course.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';

import DayTimeLocation from '../components/DayTimeLocation'

const EssentialInfoContainer = styled.div`
  h1 {
    margin: 0;
  }
  h3 {
    margin: 0 0 10px 0;
  }
`;

const EssentialInfoItem = styled.div`
  display: table-row;
`

const EssentialInfoHeading = styled.div`
  display: table-cell;
  vertical-align: middle;
  border-bottom: 10px solid transparent;
  text-align: right;
  font-weight: 400;
`

const EssentialInfoData = styled.div`
  display: table-cell;
  vertical-align: middle;
  border-left: 15px solid transparent;
  border-bottom: 10px solid transparent;
  ul {\
    margin: 0;
    padding-left: ${props => props.bulletedList ? '25px' : 0};
    list-style-type: ${props => props.bulletedList ? 'circle' : 'none'};
  }
`

function CourseEssentialInfo(props) {
  const { number, title, term, instructor, officeHours, lectures, finalExams, syllabusLink, textbooks, links } = props;
  return (
      <EssentialInfoContainer>
        <h1>{number} &ndash; {title}</h1>
        <h3>{term}</h3>

        <EssentialInfoItem>
          <EssentialInfoHeading>Instructor:</EssentialInfoHeading>
          <EssentialInfoData>
            <a href={`mailto:${instructor.email}`}>{instructor.name}</a>
          </EssentialInfoData>
        </EssentialInfoItem>

        <EssentialInfoItem>
          <EssentialInfoHeading>Office hours:</EssentialInfoHeading>
          <EssentialInfoData>
            <ul>
              {officeHours.map((dtl, i) => (
                <li key={i}><DayTimeLocation {...dtl} /></li>
              ))}
            </ul>
          </EssentialInfoData>
        </EssentialInfoItem>

        <EssentialInfoItem>
          <EssentialInfoHeading>Lectures:</EssentialInfoHeading>
          <EssentialInfoData>
            <ul>
              {Object.keys(lectures).map((section, i) => (
                <li key={i}>Section {section}: <DayTimeLocation {...lectures[section]} /></li>
              ))}
            </ul>
          </EssentialInfoData>
        </EssentialInfoItem>

        {finalExams ?
          <EssentialInfoItem>
            <EssentialInfoHeading>Final Exams:</EssentialInfoHeading>
            <EssentialInfoData>
              <ul>
                {Object.keys(finalExams).map((section, i) => (
                  <li key={i}>Section {section}: <DayTimeLocation {...finalExams[section]} /></li>
                ))}
              </ul>
            </EssentialInfoData>
          </EssentialInfoItem> :
          null
        }

        <EssentialInfoItem>
          <EssentialInfoHeading>Syllabus:</EssentialInfoHeading>
          <EssentialInfoData>
            <a href={syllabusLink}>{number} syllabus</a>
          </EssentialInfoData>
        </EssentialInfoItem>

        {textbooks ?
          <EssentialInfoItem>
            <EssentialInfoHeading>Textbooks:</EssentialInfoHeading>
            <EssentialInfoData>
              <ul>
                {textbooks.map((textbook, i) => (
                  <li key={i}><a href={textbook.link} target="_blank" rel="noopener noreferrer">{textbook.title}</a> by {textbook.author}</li>
                ))}
              </ul>
            </EssentialInfoData>
          </EssentialInfoItem>:
          null
        }

        {links ?
          <EssentialInfoItem>
            <EssentialInfoHeading>Links:</EssentialInfoHeading>
            <EssentialInfoData bulletedList>
              <ul>
                {links.map((link, i) => (
                  <li key={i}><a href={link.link} target="_blank" rel="noopener noreferrer">{link.text}</a></li>
                ))}
              </ul>
            </EssentialInfoData>
          </EssentialInfoItem>:
          null
        }

      </EssentialInfoContainer>
  );
}

CourseEssentialInfo.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  term: PropTypes.string.isRequired,
  instructor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
  officeHours: PropTypes.arrayOf(PropTypes.shape(DayTimeLocation.propTypes)).isRequired,
  lectures: PropTypes.objectOf(PropTypes.shape(DayTimeLocation.propTypes)).isRequired,
  finalExams: PropTypes.objectOf(PropTypes.shape(DayTimeLocation.propTypes)),
  syllabusLink: PropTypes.string.isRequired,
  textbooks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })),
  links: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }))
};

export default CourseEssentialInfo;
