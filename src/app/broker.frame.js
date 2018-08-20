export default class FrameBroker{
    static goUp(){
        const {history,location}=this.props;
        const path=location.pathname.split('/');
        history.push('/'+path[path.length-2]);
    }
}