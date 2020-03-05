import blogContentStyles from '../../jss-styles/blog/blogContent';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PostsOverview from './postsOverview';
import Link from 'next/link';

const BlogContent = (props) => {
    const classes = blogContentStyles();
    return (
        <div className={classes.contentWrapper}>
            <div className={classes.background}>
                <div className={classes.header}>
                    <Link href="/">
                        <a className={classes.toWebsite}>
                            <svg fill="currentColor" viewBox="0 0 32 32"><path d="M32,16.009c0-0.267-0.11-0.522-0.293-0.714  l-9.899-9.999c-0.391-0.395-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428l8.193,8.275H1c-0.552,0-1,0.452-1,1.01  s0.448,1.01,1,1.01h27.586l-8.192,8.275c-0.391,0.394-0.39,1.034,0,1.428c0.391,0.394,1.024,0.394,1.414,0l9.899-9.999  C31.894,16.534,31.997,16.274,32,16.009z"/><g/><g/><g/><g/><g/><g/></svg>
                            <span>Website</span>
                        </a>
                    </Link>
                    <div className={classes.headerContentWrapper}>
                        <h1>{props.blog.header.title.st}<span className={'neonE'}>{props.blog.header.title.nd}</span> {props.blog.header.title.rd}<span className={'neonI'}>{props.blog.header.title.fth}</span><span className={'neonT'}>{props.blog.header.title.vth}</span> {props.blog.header.title.sth}</h1>
                        <div className={classes.socialMedia}>
                            <a href={props.social.github} rel="nofollow" target='_blank'><svg fill="currentColor" viewBox="0 0 32 32"><g><g><path d="M23.215,3.885c0,0,0.965,1.931,0.103,3.835c1.263,1.426,1.697,3.214,1.697,4.847    c0,3.012-1.595,5.523-6.934,6.093c0.715,0.499,1.184,1.328,1.184,2.267v4.04c0,1.527-1.238,2.766-2.765,2.766h-1.79    c-1.527,0-2.765-1.238-2.765-2.766v-2.312c-0.294,0.093-0.71,0.148-1.185,0.148c-0.759,0-1.666-0.144-2.463-0.508    c-1.359-0.622-1.199-1.589-2.065-2.766c-0.375-0.509-1.691-1.059-1.346-1.312c0.177-0.13,0.383-0.181,0.599-0.181    c0.827,0,1.798,0.757,1.798,0.757c0.853,0.714,0.576,1.612,2.512,2.188c0.216,0.064,0.431,0.09,0.636,0.09    c0.837,0,1.519-0.43,1.519-0.43s0.012-0.017,0.013-0.017l0,0c0.075-0.839,0.518-1.513,1.171-1.969    c-5.312-0.576-6.9-3.083-6.9-6.089c0-1.905,0.392-3.629,1.512-4.945C6.958,5.748,7.889,3.885,7.889,3.885    c1.818,0.032,3.688,1.308,3.967,1.504c1.062-0.235,2.309-0.363,3.769-0.363c1.378,0,2.565,0.141,3.589,0.389    C19.213,5.414,21.245,3.92,23.215,3.885 M23.827,2.874l-0.63,0.011c-1.73,0.031-3.438,0.983-4.186,1.46    c-1.029-0.212-2.167-0.319-3.388-0.319c-1.308,0-2.504,0.101-3.562,0.301c-0.771-0.487-2.453-1.411-4.156-1.441L7.275,2.874    L6.994,3.438c-0.043,0.085-0.95,1.943-0.371,3.999c-0.935,1.321-1.391,3.007-1.391,5.13c0,2.277,0.794,4.023,2.369,5.227    c-0.458-0.305-1.28-0.758-2.116-0.758c-0.444,0-0.856,0.129-1.19,0.374c-0.302,0.223-0.472,0.559-0.466,0.923    c0.012,0.665,0.548,1.032,1.065,1.388c0.173,0.117,0.461,0.315,0.536,0.406c0.244,0.331,0.389,0.651,0.542,0.99    c0.326,0.718,0.695,1.531,1.909,2.087c1.137,0.521,2.292,0.599,2.879,0.599c0.062,0,0.124-0.001,0.185-0.003v1.167    c0,2.076,1.688,3.766,3.765,3.766h1.79c2.076,0,3.765-1.689,3.765-3.766v-4.04c0-0.543-0.118-1.071-0.336-1.553    c3.079-0.684,6.086-2.464,6.086-6.807c0-1.38-0.282-3.321-1.561-5.033c0.635-2.093-0.301-4.008-0.345-4.096L23.827,2.874    L23.827,2.874z M10.431,20.07c-0.124,0-0.242-0.016-0.351-0.048c-0.906-0.271-1.066-0.535-1.331-0.975    c-0.181-0.3-0.406-0.673-0.824-1.022c0-0.001-0.001-0.001-0.002-0.002c0.895,0.603,2.011,1.052,3.347,1.345    c-0.084,0.188-0.152,0.383-0.204,0.584C10.891,20.015,10.667,20.07,10.431,20.07L10.431,20.07z"/></g><g><path d="M6.273,18.36c-0.062,0-0.115,0.023-0.143,0.069c-0.048,0.082,0.008,0.205,0.125,0.274    c0.053,0.031,0.109,0.046,0.159,0.046c0.062,0,0.115-0.023,0.143-0.068c0.049-0.082-0.008-0.205-0.126-0.274    C6.38,18.376,6.323,18.36,6.273,18.36L6.273,18.36z"/></g><g><path d="M6.913,18.934c-0.031,0-0.06,0.008-0.082,0.026c-0.076,0.058-0.07,0.193,0.014,0.302    c0.058,0.075,0.137,0.117,0.205,0.117c0.03,0,0.059-0.008,0.082-0.026c0.076-0.058,0.069-0.193-0.014-0.301    C7.061,18.977,6.98,18.934,6.913,18.934L6.913,18.934z"/></g><g><path d="M7.461,19.688c-0.03,0-0.059,0.009-0.082,0.026c-0.075,0.059-0.069,0.193,0.014,0.302    c0.058,0.075,0.137,0.117,0.205,0.117c0.031,0,0.06-0.008,0.083-0.026c0.075-0.058,0.069-0.192-0.014-0.301    C7.608,19.731,7.529,19.688,7.461,19.688L7.461,19.688z"/></g><g><path d="M8.193,20.549c-0.047,0-0.089,0.016-0.115,0.048c-0.062,0.073-0.026,0.204,0.079,0.291    c0.059,0.049,0.127,0.074,0.187,0.074c0.047,0,0.088-0.016,0.114-0.048C8.52,20.84,8.484,20.71,8.38,20.623    C8.321,20.574,8.253,20.549,8.193,20.549L8.193,20.549z"/></g><g><path d="M9.261,21.11c-0.12,0-0.221,0.056-0.242,0.144c-0.029,0.112,0.079,0.236,0.24,0.277    c0.034,0.009,0.068,0.013,0.102,0.013c0.12,0,0.22-0.055,0.241-0.143c0.029-0.113-0.079-0.236-0.24-0.278    C9.327,21.114,9.293,21.11,9.261,21.11L9.261,21.11z"/></g><g><path d="M10.446,21.286c-0.159,0-0.287,0.086-0.292,0.197c-0.004,0.116,0.127,0.216,0.294,0.222    c0.005,0,0.011,0,0.016,0c0.159,0,0.288-0.086,0.292-0.198c0.005-0.115-0.126-0.215-0.292-0.221    C10.458,21.286,10.452,21.286,10.446,21.286L10.446,21.286z"/></g><g><path d="M11.615,21.167c-0.028,0-0.058,0.003-0.087,0.009c-0.162,0.034-0.275,0.154-0.252,0.268    c0.02,0.093,0.125,0.152,0.252,0.152c0.028,0,0.058-0.003,0.087-0.009c0.162-0.034,0.275-0.153,0.252-0.267    C11.848,21.227,11.742,21.167,11.615,21.167L11.615,21.167z"/></g></g></svg></a>
                            <a href={props.social.twitter} rel="nofollow" target='_blank'><svg fill="currentColor" viewBox="0 0 512 512" ><path d="M346.8,80c22.3,0,43.8,9.3,59,25.6l6.1,6.5l8.7-1.7c4.5-0.9,8.9-1.9,13.3-3.1c-1,1.4-5.7,6.1-11,10.8  c-4.5,4-17.8,16.5-17.8,16.5s13,4.1,21.1,5s17.4-0.6,18.9-0.8c-2.8,2.3-7.8,5.8-10.8,7.9l-7,5.1l0.4,8.6c0.2,3.8,0.3,7.8,0.3,11.8  c0,30.2-5.9,61.8-17,91.5c-11.7,31.2-28.5,59.4-50,83.8c-23,26.1-50.2,46.5-81.1,60.8c-33.8,15.7-71.3,23.6-111.5,23.6  c-28.9,0-57.4-4.8-84.5-14.2c9.9-1.9,19.6-4.6,29.1-7.9c21.7-7.6,41.9-18.7,60.1-33l35.3-27.7l-44.9-0.8  c-26.1-0.5-49.7-13.4-64.3-33.9c7.3-0.5,14.5-1.8,21.5-3.7l60.7-20.2l-61.7-10.9c-29.6-5.9-52.8-27.9-61.3-55.8  c7.8,2,15.4,2.8,23.9,3.3c0,0,31.8,1.4,55.8-0.1c-13-6.2-46.4-29.2-46.4-29.2c-22.5-15.1-36-40.2-36-67.4c0-6.4,0.8-12.8,2.2-19  c21.9,22.4,47,41.1,75.1,55.5c37,19.1,76.9,29.8,118.6,31.9l21.2,1.1l-4.8-20.7c-1.4-5.9-2.1-12.1-2.1-18.5  C265.9,116.3,302.2,80,346.8,80 M346.8,64c-53.5,0-96.8,43.4-96.8,96.9c0,7.6,0.8,15,2.5,22.1C172,179,100.6,140.4,52.9,81.7  c-8.3,14.3-13.1,31-13.1,48.7c0,33.6,17.1,63.3,43.1,80.7C67,210.7,52,206.3,39,199c0,0.4,0,0.8,0,1.2c0,47,33.4,86.1,77.7,95  c-8.1,2.2-16.7,3.4-25.5,3.4c-6.2,0-12.3-0.6-18.2-1.8c12.3,38.5,48.1,66.5,90.5,67.3c-33.1,26-74.9,41.5-120.3,41.5  c-7.8,0-15.5-0.5-23.1-1.4C62.9,432,113.8,448,168.4,448C346.6,448,444,300.3,444,172.2c0-4.2-0.1-8.4-0.3-12.5  c18.9-13.7,35.3-30.7,48.3-50.2c-17.4,7.7-36,12.9-55.6,15.3c20-12,35.4-31,42.6-53.6c-18.7,11.1-39.4,19.2-61.5,23.5  C399.8,75.8,374.6,64,346.8,64L346.8,64z"/></svg></a>
                            <a href={props.social.linkedin} rel="nofollow" target='_blank'><svg fill="currentColor" viewBox="0 0 24 24"><g><g><g><path d="M23.978,23.52H16.81v-8.115c0-1.922-0.623-1.922-0.89-1.922c-1.061,0-1.177,1.369-1.177,1.957v8.08H8.287V8.496h6.409     c0.779-0.471,1.834-0.732,3.006-0.732c0.75,0,2.642,0.138,4.015,1.419c1.459,1.359,2.261,3.46,2.261,5.915V23.52z M17.585,22.744     h5.618v-7.646c0-2.237-0.716-4.137-2.015-5.348c-1.172-1.093-2.829-1.211-3.486-1.211c-1.313,0-2.436,0.356-3.076,0.978     l-0.656,0.638V9.271L9.062,9.289v13.455h4.908v-7.305c0-1.711,0.729-2.732,1.95-2.732c1.12,0,1.665,0.882,1.665,2.697V22.744z      M7.189,23.52H0.022V8.496h7.167V23.52z M0.797,22.744h5.617V9.271L0.797,9.289V22.744z M3.605,7.649     c-1.976,0-3.583-1.608-3.583-3.585c0-1.976,1.607-3.583,3.583-3.583c1.976,0,3.583,1.607,3.583,3.583     C7.189,6.041,5.582,7.649,3.605,7.649z M3.605,1.256c-1.549,0-2.809,1.26-2.809,2.808c0,1.549,1.26,2.81,2.809,2.81     s2.809-1.26,2.809-2.81C6.414,2.516,5.154,1.256,3.605,1.256z"/></g></g></g></svg></a>
                            <a href={props.social.facebook} rel="nofollow" target='_blank'><svg fill="currentColor" viewBox="0 0 50 50"><g><path d="M44,1H6C3.243,1,1,3.243,1,6v38c0,2.757,2.243,5,5,5h21V30h-6v-6h6v-4c0-6.065,4.935-11,11-11h3v6h-3c-2.757,0-5,2.243-5,5   v4h7.867l-0.75,6H33v19h11c2.757,0,5-2.243,5-5V6C49,3.243,46.757,1,44,1z M47,44c0,1.654-1.346,3-3,3h-9V32h6.883l1.25-10H35v-2   c0-1.654,1.346-3,3-3h5V7h-5c-7.168,0-13,5.832-13,13v2h-6v10h6v15H6c-1.654,0-3-1.346-3-3V6c0-1.654,1.346-3,3-3h38   c1.654,0,3,1.346,3,3V44z"/></g><g/></svg></a>
                        </div>
                    </div>
                </div>
                <PostsOverview content={props.blog.overview} data={props.data}/>
            </div>
        </div>
    );
};
// <p>{props.blog.header.subtitle}</p>

export default BlogContent;