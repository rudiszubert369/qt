import React from 'react';

const SecondSection = () => {
  return (
    <div className="container" style={{marginTop: '29px', marginBottom: '50px'}}>
    <div className="row">
      <div className="col-md-6 col-sm-12" style={{ marginTop: '20px'}}>
        <div style={{paddingLeft: '0', border: '1px solid', height: '422px'}}>
          <div className="row" style={{height: '116px'}}>
            <div className="col-md-4 col-sm-12">
              <div style={{marginTop: '-21px', height: '111px', backgroundColor: '#F3B700'}}>
                <div style={{textAlign: 'center', marginTop: '21px'}}>
                  <p style={{height: '10px'}}>1</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div style={{marginTop: '-21px', height: '111px', backgroundColor: '#F3B700'}}>
                <div style={{textAlign: 'center', marginTop: '21px'}}>
                  <p style={{height: '10px'}}>4</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12" style={{paddingRight: '11px'}}>
              <div style={{marginTop: '-21px', height: '111px', backgroundColor: '#F3B700'}}>
                <div style={{textAlign: 'center', marginTop: '21px'}}>
                  <p style={{height: '10px'}}>2</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{marginTop: '27px'}}>
            <div className="col-md-12 col-sm-hidden" style={{height: '80px'}}>
              <div style={{textAlign: 'center', marginTop: '32px'}}>
                <p>x</p>
              </div>
            </div>
          </div>
          <div className="row" style={{paddingLeft: '11px', paddingRight: '11px'}}>
            <div className="col-md-6" style={{height: '197px', backgroundColor: '#F3B700'}}>
              <div style={{textAlign: 'center', marginTop: '43px'}}>
                <p>3</p>
              </div>
            </div>
            <div className="col-md-6" style={{height: '80px'}}>
              <div style={{textAlign: 'center', marginTop: '43px'}}>
                <p>x</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-sm-12" style={{ marginTop: '20px', border: '1px solid', height: '422px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div className="row" style={{ backgroundColor: '#F3B700', height: '25%' }}>
          <div className="col-md-12">
            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <p>1</p>
            </div>
          </div>
        </div>
        <div className="row" style={{ height: '25%%' }}>
          <div className="col-md-12">
            <div style={{ marginTop: '32px' }}>
            </div>
          </div>
        </div>
        <div className="row" style={{ backgroundColor: '#F3B700', height: '25%' }}>
          <div className="col-md-12">
            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <p>2</p>
            </div>
          </div>
        </div>
        <div className="row" style={{ height: '25%' }}>
          <div className="col-md-12">
            <div style={{ marginTop: '32px' }}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default SecondSection;
