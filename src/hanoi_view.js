class View {
    constructor(HanoiGame, $el) {
        this.game = HanoiGame;
        this.$el = $el;
        this.clickedPile = -1;
        
        this.setUpTowers();
        this.render();
        $("div.container").on("click", e => this.clickTower(e));
    }

    setUpTowers() {
        for (let i = 0; i < 3; i++) {
            let $pile = $("<ul></ul>");
            $pile.addClass("pile");
            $pile.data("pile_id", i);
            if (i === 0) { $pile = this._addDiscs($pile); }

            let $container = $("<div></div>");
            $container.addClass("container");
            let $line = $("<div></div>");
            $line.addClass("line line-unclicked");

            $container.append($pile);
            $container.append($line);
            this.$el.append($container);
        }
    }

    _addDiscs($pile) {
        for (let j = 1; j <= 3; j++) {
            let discClass = "disc" + j.toString();
            let $li = $("<li></li>");
            $li.addClass("disc-unfin disc " + discClass);
            $li.data("disc_id", j);
            $pile.append($li);
        }
        return $pile;
    }

    render() {
        const $piles = $("ul.pile");
        for (let towerIdx = 0; towerIdx < this.game.towers.length; towerIdx++) {
            // get tower
            let $tower = $($piles[towerIdx])

            for (let discIdx = 0; discIdx < this.game.towers[towerIdx].length; discIdx++) {
                // get disc
                let currentDiscId = this.game.towers[towerIdx][discIdx];
                let $currentDisc = $("li.disc" + currentDiscId);

                // append disc to tower
                $tower.prepend($currentDisc);
            }
        }
    }

    clickTower(e) {
        let $container = $(e.currentTarget);
        let $tower = $($container.children("ul"));
        
        if (this.clickedPile === -1) {
            this.clickedPile = $tower.data("pile_id");
            let $line = $($container.children("div"));
            $line.removeClass("line-unclicked");
            $line.addClass("line-clicked");
            
        } else {
            // on second click, attempt move
            if (!this.game.move(this.clickedPile, $tower.data("pile_id"))) {
                alert("Cannot move disc there!");
            }
            this.clickedPile = -1;
            $("div.line").addClass("line-unclicked");
            $("div.line").removeClass("line-clicked");
        }
        this.render();
    }

    win() {
        // change disc color
        alert("Good work!");
    }
}

module.exports = View;