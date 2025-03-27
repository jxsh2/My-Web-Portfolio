/** SEMANTIC UI COMPONENTS */
import {
    Container,
    Loader,
} from "semantic-ui-react";

/** STYLES */
import style from "styles/main.module.scss";

const LoaderComponent = () => {
    return (
        <div
            className={ [
                style.generics,
                style.loader
            ].join(" ") }>
            <div 
                className={ style.globalOffsetPaddingTop } /> 
            <Container>
                <Loader
                    active
                    inline="centered"
                    size="large"
                    className={ style.customLoader }/>
            </Container>
        </div>
    );
}

export default LoaderComponent;