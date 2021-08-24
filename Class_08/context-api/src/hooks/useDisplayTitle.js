import { useState, useEffect } from 'react';


function useDisplayText (defaultTitle) {
    const [title, setTitle] = useState(defaultTitle);
    useEffect(() => {
        setTimeout(() => setTitle('BRAND NEW HOME'), 1000)
    }, [])


    return [title, setTitle]
}

export default useDisplayText;