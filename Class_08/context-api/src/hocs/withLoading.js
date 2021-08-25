

// function withLoading (Component) {
//     function LoadingComponent (props) {
//         return (
//             <>
//                 {
//                     props.isLoading
//                         ? <h1>Loading.....</h1>
//                         : <Component { ...props } />
//                 }
//             </>
//         )
//     }
//     return LoadingComponent;
// }

// export default withLoading;

const withLoading = Component => props => {
    return (
        <>
        {
            props.isLoading
                ? <h1>Loading.....</h1>
                : <Component product={props.product}/>
        }
        </>
    )
}

export default withLoading;