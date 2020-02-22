import { createUseStyles } from 'react-jss';
import colors from '../colors';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

const postDetailedContentStyles = createUseStyles({
    wrapper: {
        width:'100vw',
        backgroundColor: '#151515',
        marginTop: '20px',
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    postContent: {
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& img': {
            maxWidth: '100%',
            height: 'auto',
            margin: '20px auto',
            alignSelf: 'center'
        },
        '& p': {
            textAlign: 'left'
        },
    },
    leftColumn: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        maxHeight: '273px',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '620px',
        margin: '0 auto'
    },
    blogPostShare: {
        width: '280px',
        height: '93px',
        margin: '10px auto',
        textAlign: 'center',
        padding: '14px',
        boxShadow: '7px 7px 6px -6px rgba(0,0,0,0.4)',
        backgroundColor: props => props.background,
        '& h5': {
            color: props => props.header
        }
    },

    commentForm: {
        marginTop: '30px'
    },

    commentsWrapper: {
        marginTop: '30px',
        marginBottom: '20px',
        '& h5': {
            textAlign: 'center',
            color: props => props.header
        }
    },

    '@media (max-width: 1000px)': {
        commentForm: {
            marginTop: '50px'
        }
    },

    '@media (max-width: 770px)': {
        postContent: {
            padding: '0 20px'
        }
    },
    

});

export default postDetailedContentStyles;