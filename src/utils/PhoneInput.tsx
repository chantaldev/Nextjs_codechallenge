import React, { useState } from 'react';
import styled from 'styled-components';

const countries = [
  {
    name: "United States",
    phone_code: "+1",
    flag_url: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
  },
  {
    name: "Canada",
    phone_code: "+1",
    flag_url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg"
  },
  {
    name: "United Kingdom",
    phone_code: "+44",
    flag_url: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
  },
  {
    name: "Australia",
    phone_code: "+61",
    flag_url: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg"
  },
  {
    name: "Germany",
    phone_code: "+49",
    flag_url: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg"
  },
  {
    name: "France",
    phone_code: "+33",
    flag_url: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
  },
  {
    name: "Japan",
    phone_code: "+81",
    flag_url: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg"
  },
  {
    name: "China",
    phone_code: "+86",
    flag_url: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_China.svg"
  },
  {
    name: "India",
    phone_code: "+91",
    flag_url: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
  },
  {
    name: "Brazil",
    phone_code: "+55",
    flag_url: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg"
  }
];


const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const PhoneInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FlagButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 5px; 
  display: flex;
  align-items: center;
`;

const FlagIcon = styled.img`
  width: 20px; 
  height: 15px; 
`;

const CountryCode = styled.span`
  margin-right: 5px;
`;

const PhoneInputField = styled.input`
  flex: 1;
  border: none; 
  outline: none; 
  padding: 5px;

  ::placeholder {
    color: #888; 
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%; 
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  width: 100%;
`;

const DropdownItem = styled.div`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0; 
  }
`;

const PhoneInput = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); 
  const [phoneNumber, setPhoneNumber] = useState(''); 
  const [dropdownVisible, setDropdownVisible] = useState(false); 

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setDropdownVisible(false); 
  };

  return (
    <Container>
      <PhoneInputWrapper>
        <FlagButton onClick={toggleDropdown}>
          <FlagIcon
            src={selectedCountry.flag_url}
            alt={`${selectedCountry.name} flag`}
          />
        </FlagButton>
        <CountryCode>{selectedCountry.phone_code}</CountryCode>
        <PhoneInputField
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Your phone number"
        />
        <Dropdown visible={dropdownVisible}>
          {countries.map((country, index) => (
            <DropdownItem key={index} onClick={() => handleCountrySelect(country)}>
              <FlagIcon src={country.flag_url} alt={`${country.name} flag`} style={{ marginRight: '5px' }} />
              {country.name} ({country.phone_code})
            </DropdownItem>
          ))}
        </Dropdown>
      </PhoneInputWrapper>
    </Container>
  );
};

export default PhoneInput;
