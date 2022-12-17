import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import cls from './StarRating.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '../Icon/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';

interface StarRatingProps {
  className?: string;
  onSelect?: (startCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className,
        size = 30,
        selectedStars = 0,
        onSelect,
    } = props;

    const { t } = useTranslation();

    const [currentStarsCount, setCurrrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrrentStarsCount(starsCount);
        }
    };

    const onLeave = () => () => {
        if (!isSelected) {
            setCurrrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    Svg={StarIcon}
                    key={starNumber}
                    className={classNames(
                        cls.starIcon,
                        { [cls.selected]: isSelected },
                        [currentStarsCount >= starNumber ? cls.hovered : cls.normal],
                    )}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
});
