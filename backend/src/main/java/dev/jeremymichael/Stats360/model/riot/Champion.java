package dev.jeremymichael.Stats360.model.riot;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Champion implements Expression {
    private String puuid;
    private Integer championId;
    private String name;
    private Integer championLevel;
    private Integer championPoints;
    private Long lastPlayTime;
    private Integer championPointsSinceLastLevel;
    private Integer championPointsUntilNextLevel;
    private Boolean chestGranted;
    private Integer tokensEarned;
    private String summonerId;

    public void interpret(ChampionInterpreterContext championInterpreterContext) {
        this.name = championInterpreterContext.interpret(championId);
    }
}
