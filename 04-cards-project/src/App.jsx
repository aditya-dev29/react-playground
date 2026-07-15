import React from 'react';
import { Bookmark } from "lucide-react";
import Card from './components/Card';

const App = () => {

  const jobs = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    company: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    company: "Microsoft",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    company: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Menlo Park, USA",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    company: "Apple",
    datePosted: "3 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$78/hr",
    location: "Cupertino, USA",
  },
  {
   brandLogo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    company: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$58/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
    company: "Netflix",
    datePosted: "2 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Los Gatos, USA",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    company: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$88/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
    company: "Adobe",
    datePosted: "4 days ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Noida, India",
  },
  {
   brandLogo: "https://cdn.simpleicons.org/uber",
    company: "Uber",
    datePosted: "8 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
    company: "Spotify",
    datePosted: "3 weeks ago",
    post: "Web Developer",
    tag1: "Remote",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Stockholm, Sweden",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    company: "Tesla",
    datePosted: "12 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$82/hr",
    location: "Austin, USA",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    company: "Oracle",
    datePosted: "5 weeks ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    company: "Salesforce",
    datePosted: "9 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/intel",
    company: "Intel",
    datePosted: "1 month ago",
    post: "Embedded Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",    company: "OpenAI",
    datePosted: "2 days ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "San Francisco, USA",
  },
];

console.log(jobs);

  return (
      <div className="parent">
        {jobs.map(function(elem, idx){
          return <div key={idx}>
                  <Card company={elem.company} post={elem.post} pay={elem.pay}  
                  tag1={elem.tag1} tag2={elem.tag2} location={elem.location} 
                  datePosted={elem.datePosted} brandLogo={elem.brandLogo} />
            </ div>
        })}
      </div>
  )
}

export default App