import { Dna, Oval } from 'react-loader-spinner';

export const LoadingSpinner = () => (
    <div style={{ position: "fixed", height: 300, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Dna
            visible={true}
            height="70%"
            width="70%"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
        />
    </div>

);

export const CircularSpinner = () => (
    <Oval
        height={40}
        width={40}
        color="rgb(53 30 207)"
        ariaLabel='oval-loading'
        // secondaryColor="white"
        strokeWidth={6}
    // strokeWidthSecondary={2}

    />

);


