import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//The useLocation hook is a function that returns the location object that contains information about the current URL. 
import { useDataContext } from '../FetchApi/Api'
import {Loading} from './Loading';
import ReactPlayer from 'react-player'

const Result = () => {
  const {getResult,results,isLoad,srch}=useDataContext();
 
  const loc=useLocation();
  useEffect(() => {
    if (srch) {
        getResult(`${loc.pathname}/q=${srch}&num=100`);
      
    }
    // eslint-disable-next-line
  }, [srch, loc.pathname]);
 
  if(isLoad) 
  return <Loading/>
  switch (loc.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full ">
              <a href={link} >
                <p className="text-sm">
                  {link.length > 25 ? link.substring(0, 25) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );

      case "/image":
    
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.map(({ image, link: { href, title } }, index) => (
            <a
              className="sm:p-3 p-5"
              href={href}
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="w-36 break-words text-sm mt-2 ml-2 hover:underline">{title}</p>
            </a>
          ))}
        </div>
      );

    case "/news":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
          {results?.map(({ links, id, source, title }) => (
            <div key={id} className="md:w-2/5 w-full">
              <a
                href={links?.[0].href}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <p className="text-lg dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <div className="flex gap-4">
                <a href={source?.href} target="_blank" rel="noreferrer">
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    case "/video":
      return (
        <div className="flex flex-wrap ">
        {results?.map((video, index) => (
          <div key={index} className="p-2">
            {console.log(video)}
            {video?.additional_links?.[0]?.href && (
              <ReactPlayer
                url={video.additional_links?.[0].href}
                controls
                width="355px"
                height="200px"
              />
            )}
          </div>
        ))}
      </div>
      );
  
    default:
     return 'ERROR!';
  }
 
}

export default Result
