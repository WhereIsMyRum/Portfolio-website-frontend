import colors from '../jss-styles/colors';

const Loader = (props) => {
    const color = props.color ? props.color : colors.mint;
    return (
        <div>
            <div className="loaderWrapper">
                <div className={`elem elem-outer rotating`} style={{borderLeftColor: color, borderRightColor: color}}>
                    <div className={`elem elem-inner rotating`} style={{borderLeftColor: color, borderRightColor: color}}>
                        <div className={`elem elem-inner-2 rotating`} style={{borderLeftColor: color, borderRightColor: color}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loader;