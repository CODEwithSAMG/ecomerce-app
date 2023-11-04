import { Dna, Oval } from 'react-loader-spinner';

export const DnaSpinner = () => (
    <div className='ui_dna_spinner'>
        <Dna
            visible={true}
            height="10%"
            width="10%"
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
        secondaryColor="white"
        strokeWidth={6}
        strokeWidthSecondary={5}
    />

);


