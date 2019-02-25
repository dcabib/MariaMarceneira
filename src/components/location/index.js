import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.216240548336!2d-46.65538638425365!3d-23.524723684701147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce580d0c55be7f%3A0x48621aa8ef3fd74a!2sR.+Dr.+Ribeiro+de+Almeida%2C+166+-+Barra+Funda%2C+S%C3%A3o+Paulo+-+SP%2C+01137-020%2C+Brasil!5e0!3m2!1spt-BR!2sus!4v1550588327613"
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Localização da OficinaLab</div>
            </div>

        </div>
    );
};

export default Location;