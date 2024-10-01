package dev.jeremymichael.Stats360.model.Dota;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class DotaStats {
    private WL wl;
    private List<Hero> hero;
}
