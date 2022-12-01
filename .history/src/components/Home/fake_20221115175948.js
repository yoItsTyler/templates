


useEffect(() => {

    if (props) {
        console.log('running first useEffect, props => ', props, 'first Render ?',);
        setIsMobile(props);
    };

}, [props]);


useEffect(() => {
    if (isMobile) {
        console.log('ismobile => ', isMobile);
        setMobile(isMobile.props);
    };

    console.log('isMobile UE not if not satisfied props=', props, 'isMobile =', isMobile,)

}, [isMobile]);

useEffect(() => {
    if (mobile) {
        console.log('mobile => ', mobile);
    }

}, [mobile]);


useEffect(() => {  
}, []);