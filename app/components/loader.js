import loaderStyles from '../jss-styles/loader'


const Loader = (props) => {
    const classes = loaderStyles();

    return (
        <div>
            <style jsx global>{`
                .elem { 
                    border-radius: 100%;
                    border-width: 3px;
                    border-style: solid;
                    border-color: transparent;
                    background-color: transparent;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    border-left-color: #5C8D8D;
                    border-right-color: #5C8D8D;
                }
                .elem-outer {
                    width: 60px;
                    height: 60px;
                    transform: rotate(deg);
                }
                .elem-inner {
                    width: 50px;
                    height: 50px;
                    transform: rotate(60deg);
                }
                .elem-inner-2 {
                    width: 40px;
                    height: 40px;
                    transform: rotate(90deg);
                }
                @-webkit-keyframes rotating /* Safari and Chrome */ {
                    from {
                      -webkit-transform: rotate(0deg);
                      -o-transform: rotate(0deg);
                      transform: rotate(0deg);
                    }
                    to {
                      -webkit-transform: rotate(360deg);
                      -o-transform: rotate(360deg);
                      transform: rotate(360deg);
                    }
                  }
                  @keyframes rotating {
                    from {
                      -ms-transform: rotate(0deg);
                      -moz-transform: rotate(0deg);
                      -webkit-transform: rotate(0deg);
                      -o-transform: rotate(0deg);
                      transform: rotate(0deg);
                    }
                    to {
                      -ms-transform: rotate(360deg);
                      -moz-transform: rotate(360deg);
                      -webkit-transform: rotate(360deg);
                      -o-transform: rotate(360deg);
                      transform: rotate(360deg);
                    }
                  }
                  .rotating {
                    -webkit-animation: rotating 2s ease-in-out infinite;
                    -moz-animation: rotating 2s ease-in-out infinite;
                    -ms-animation: rotating 2s ease-in-out infinite;
                    -o-animation: rotating 2s ease-in-out infinite;
                    animation: rotating 2s ease-in-out infinite;
                  }
                  .loaderWrapper {
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      min-height: 250px;
                  }
            `}</style>
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