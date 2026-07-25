/** LIBRARIES */
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";

/** COMPONENTS */
const Head = dynamic(() => import("components/generics/Head"));
const LoaderComponent = dynamic(() => import("components/generics/Loader"));

/** STYLES */
import style from "styles/main.module.scss";

const MIN_LOADER_DURATION = 1600;

const MainLayout = (props) => {
  let { children, hasMetaTags, mainContainerStyle } = props;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), MIN_LOADER_DURATION);
    return () => clearTimeout(timer);
  }, []);

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {})
  );

  return (
    <div
      className={[mainContainerStyle ? mainContainerStyle : "", style.posRelative].join(
        " "
      )}
    >
      {hasMetaTags && <Head {...props} />}

      <AnimatePresence>
        {isLoading ? (
          <LoaderComponent key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          >
            {childrenWithProps}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainLayout;
