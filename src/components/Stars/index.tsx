import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { StarsContainer } from './styles';
import colors from '../../styles/colors';

interface StarProps {
  stars: number;
}

const Stars = ({ stars }: StarProps) => {
  const [starsArray, setStarsArray] = useState<number[]>([]);

  useEffect(() => {
    setStarsArray([...Array(stars).keys()]);
  }, [stars]);

  return (
    <StarsContainer>
      {starsArray.map((key) => (
        <Icon key={key} name="star" size={10} color={colors.stars_yellow} />
      ))}
    </StarsContainer>
  );
};

export default Stars;
