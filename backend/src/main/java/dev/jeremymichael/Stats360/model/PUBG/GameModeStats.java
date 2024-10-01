package dev.jeremymichael.Stats360.model.PUBG;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class GameModeStats {
    private Stats duo;
    @JsonProperty("duo-fpp")
    private Stats duoFPP;
    private Stats solo;
    @JsonProperty("solo-fpp")
    private Stats soloFPP;
    private Stats squad;
    @JsonProperty("squad-fpp")
    private Stats squadFPP;
}
