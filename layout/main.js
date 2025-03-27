/** LIBRARIES */
import React, { 
    useState, 
    useEffect, 
} from "react";
import dynamic from "next/dynamic";

/** COMPONENTS */
const Head = dynamic(() => import("components/generics/Head"));
const LoaderComponent = dynamic(() => import("components/generics/Loader"));

/** STYLES */
import style from "styles/main.module.scss";

const MainLayout = (props) => {
    let {
        children, 
        authenticated, 
        hasMetaTags,
        mainContainerStyle,
    } = props;

    const [isLoading, setIsLoading] = useState(true)

    const useComponentDidMount = (callback) => useEffect(callback, []);

    useComponentDidMount(() => {
        setIsLoading(false);
    });

    const childrenWithProps = React.Children.map(children, child =>
        React.cloneElement(child, {})
    );

    let onRenderContentComponent = "";

    if (
        !isLoading ||
        (
            !isLoading && 
            !authenticated
        )
    ) { onRenderContentComponent = childrenWithProps; } 
    else { onRenderContentComponent = (<LoaderComponent />); }

    return (
        <div
            className={ [
                mainContainerStyle 
                    ? mainContainerStyle 
                    : "", 
                style.posRelative
            ].join(" ") }>
            {
                hasMetaTags &&
                (<Head { ...props } />)
            }
            { onRenderContentComponent }

        </div>
    );

}

export default MainLayout;