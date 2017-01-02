Food = function() {
    this.x = 0;
    this.y = 0;

    this.pickLocation = function() {
        this.x = (floor(floor(random(width))/Scale) * Scale);
        this.y = (floor(floor(random(height))/Scale) * Scale);
    }

    this.show = function() {
        fill(250, 99, 116)
        rect(this.x, this.y, Scale, Scale);
    }
}
