import {React,Component} from 'react';
import HempBag from './images/Products/hempbag.jpg';
import HempTshirt from './images/Products/hemptshirt.jpg';
import HempHandBag from './images/Products/hemphandbag.jpg';
import HempCap from './images/Products/hempcap.jpg';
const images=[HempBag,HempCap,HempTshirt,HempHandBag];

class CompanyIntro extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:0,
            image:HempTshirt
        }
    }
    componentDidMount(){
        setInterval(()=>{
            const { counter, image } = this.state;
            this.setState({counter:(counter+1)%images.length});
            this.setState({image:images[counter]});
        },3000);

        var TxtRotate = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };
        
        TxtRotate.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];
        
            if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
            }
        
            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
        
            var that = this;
            var delta = 300 - Math.random() * 100;
        
            if (this.isDeleting) { delta /= 2; }
        
            if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
            }
        
            setTimeout(function() {
            that.tick();
            }, delta);
        };
            var elements = document.getElementsByClassName('txt-rotate');
            for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
            }
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
            document.body.appendChild(css);
    }
    render(){
        const { counter, image } = this.state;
        return(
            <div style={{display:'inline'}}>
                <div style={{textAlign:'center',marginTop:'10%',fontFamily:'Courier',maxWidth:'100%',minWidth:'60%',float:'left'}}>
                    <h1 style={{fontSize:'60px',color:'#e87676'}}>Why HempIN ?</h1>
                    <span
                        style={{fontSize:'40px'}}
                        className="txt-rotate"
                        data-period="2000"
                        data-rotate='[ "Child Welfare.", "Women Empowerment.", "Web Platform.", "Make In India.", "Environment Friendly." ]'>    
                    </span>
                </div>
                <div className='ui card' style={{minWidth:'30%',maxWidth:'100%',marginRight:'10%',marginLeft:'15%'}}>
                    <img src={image} height='420px' style={{position:'center'}}/>
                </div>
            </div>
        );
    }
}
export default CompanyIntro;