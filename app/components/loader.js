const Loader = () => {
    return (
        <div>
            <div className="loaderWrapper">
                <div className={`elem elem-outer rotating`}>
                    <div className={`elem elem-inner rotating`}>
                        <div className={`elem elem-inner-2 rotating`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loader;