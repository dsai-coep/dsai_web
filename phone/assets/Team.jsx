import React from 'react';

class team {
  render() {
    <div>
      <div class="col-md-4 wow fadeInUp image" data-wow-delay="1.6s">
        <div class="team-wrapper">
          <img src={`"images/${this.props.image_src}"`} class="img-responsive img-thumbnail" alt="team img"></img>
            <div class="team-des">
              <h4>{this.props.name}</h4>
              <h3>{this.props.position}</h3>
              <ul class="social-icon">
                <center>
                    <li><a href={`"images/${this.props.linkedin}"`} target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                </center>
              </ul>
            </div>
        </div>
      </div>
    </div>
  }
};

export default Team;