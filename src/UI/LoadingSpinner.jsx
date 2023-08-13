import { Dna } from 'react-loader-spinner';

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
