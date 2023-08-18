import LoadingBar from 'react-top-loading-bar';

export const TopLoader = ({ progress, setProgress }) => {
    return (
        <LoadingBar
            height="4px"
            color='rgb(104, 85, 224)'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
        />
    )
}