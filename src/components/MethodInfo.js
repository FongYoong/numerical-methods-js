import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Fade } from "react-awesome-reveal";
import ReactMarkdown from 'react-markdown';
import RemarkMathPlugin from 'remark-math';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

const MethodInfo = ({markdown}) => {
    const [markdownContent, setMarkdownContent] = React.useState('');
    React.useEffect(() => {
        fetch(markdown).then((response) => response.text()).then((text) => {
            setMarkdownContent(text)
        })
    });

    return (
        <>
        { markdownContent &&
            <Fade>
                <ReactMarkdown
                    plugins={[RemarkMathPlugin]}
                    renderers={{
                        math: ({ value }) => <TeX block>{value}</TeX>,
                        inlineMath: ({ value }) => <TeX>{value}</TeX>
                    }}
                    children={markdownContent} escapeHtml={true}
                />
            </Fade>
        }
        { !markdownContent &&
            <Fade>
                <Skeleton variant="rect" width={"10em"} height={"4em"} animation="wave" />
            </Fade>
        }
        </>
    )
};

export default MethodInfo;