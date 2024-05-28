import type { FC } from 'react';
import arrow from 'shared/assets/images/arrow.png';

interface Props {
    type: string;
    callback: () => void;
}

export const Arrow: FC<Props> = ({ type, callback }) => {
    return <img src={arrow} alt='arrow' onClick={callback} className={type} />;
};
