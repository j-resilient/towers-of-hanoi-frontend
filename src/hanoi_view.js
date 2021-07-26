class View {
    constructor(HanoiGame, $el) {
        this.game = HanoiGame;
        this.el = $el;
        this.clickedPile = undefined;
        
        this.setUpTowers();
        // call render

        // install a click handler on each ul, callback = clickTower
    }

    setUpTowers() {
        // first ul should have 3 lis - one for each disc
        for (let i = 0; i < 3; i++) {
            let $pile = $("<ul></ul>");
            $pile.data("pile_id", i);
            if (i === 0) { $pile = this._addDiscs($pile); }
            this.el.append($pile);
        }
    }

    _addDiscs($pile) {
        for (let j = 0; j < 3; j++) {
            let $li = $("<li></li>");
            $li.data("disc_id", j);
            $pile.append($li);
        }
        return $pile;
    }

    render() {
        // alter the uls to match game state
    }

    play() {
        // play until user has won
    }

    clickTower() {
        // on first click, get pile number and store in clickedPile
        // on second click, attempt move
        // reset clickedPile
        // call render
    }
}

module.exports = View;