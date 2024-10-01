package dev.jeremymichael.Stats360.model.PUBG;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class Attributes {
    private String name;
    private String shardId;
    private Stats stats;
    private String patchVersion;
    private String banType;
    private String titleId;
    private String clanId;
    private GameModeStats gameModeStats;
}
