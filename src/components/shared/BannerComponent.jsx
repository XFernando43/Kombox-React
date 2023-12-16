import Banner from '../../assets/banner_mens.png'

export default function BannerComponent(){
    return(
        <div className="flex justify-center">
            <img src={Banner} alt="Banner para hombres" />
        </div>
    );
}