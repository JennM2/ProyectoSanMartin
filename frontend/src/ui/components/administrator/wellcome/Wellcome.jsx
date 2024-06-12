import useStyles from './Wellcome.style';
import adminStyles from '../Admin.style';
import wellcome from '../../../../assets/images/welcome.svg';

const Wellcome = () => {

    const classes = useStyles();
    const adminClasses = adminStyles();

    return (
        <div className={adminClasses.content}>
            <p className={classes.nameWellcome}>BIENVENIDO</p>
            <img className={classes.imgWellcome} src={wellcome} alt="wellcomE" />
        </div>
    );
};

export default Wellcome;