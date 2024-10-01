package dev.jeremymichael.Stats360.model.riot;

import java.util.List;

public class ChampionInterpreter {
    private ChampionInterpreterContext championInterpreterContext;

    public ChampionInterpreter(ChampionInterpreterContext championInterpreterContext) {
        this.championInterpreterContext = championInterpreterContext;
    }

    public void interpret(List<Champion> champions) {
        for (Champion champion : champions) {
            champion.interpret(championInterpreterContext);
        }
    }
}
