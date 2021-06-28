const ContactUs = () => {
  return (
    <div>
      <div className="contact-us">
        <div className="customerservice">
          <h3>Customer Service</h3>
          <p>
            <i class="fas fa-envelope"></i>&nbsp;customer@hempin.com <br />
            <i class="fas fa-phone-alt"></i>&nbsp;+919003496599
          </p>
        </div>
        <div className="sales">
          <h3>Sales</h3>
          <p>
            <i class="fas fa-envelope"></i>&nbsp;sales@hempin.com
            <br />
            <i class="fas fa-phone-alt"></i>&nbsp;+919003496599
          </p>
        </div>
        <div className="returnsandrefund">
          <h3>Returns and Refund</h3>
          <p>
            <i class="fas fa-envelope"></i>&nbsp;returns@hempin.com
            <br />
            <i class="fas fa-phone-alt"></i>&nbsp;+919003496599
          </p>
        </div>
      </div>
      <div className="hempin-quote">
        For Public | For Profit | For Society and Environment
      </div>
    </div>
  );
};
export default ContactUs;
