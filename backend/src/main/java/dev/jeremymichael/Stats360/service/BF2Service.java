package dev.jeremymichael.Stats360.service;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import dev.jeremymichael.Stats360.model.BF2.Stats;

@Service
public class BF2Service extends GameService {
    public BF2Service() {
        API_URL = "https://api.gametools.network/bf2/stats/?name=";
    }

    public Stats stats(String name, String playerid) {
        String url = API_URL + name + "&playerid=" + playerid + "&platform=bf2hub";

        ResponseEntity<Stats> stats = exchange(
                url,
                HttpMethod.GET,
                new ParameterizedTypeReference<Stats>() {}
        );
        return stats.getBody();
    }
}