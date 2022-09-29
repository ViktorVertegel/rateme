import { TagProps } from "./Tag.props";
import styles from './Tag.module.css';
import cn from 'classnames';


export const Tag = ({size = 'm', children, className, ...props}: TagProps):JSX.Element => {
    return (
        <p className={cn(styles.p, className, {
                [styles.s]: size == 's',
                [styles.m]: size == 'm',
                [styles.l]: size == 'l',
               
        })}
            {...props}
           
       >
            {children}
        </p>
    )
    }
   


