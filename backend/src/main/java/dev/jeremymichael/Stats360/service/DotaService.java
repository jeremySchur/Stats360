package dev.jeremymichael.Stats360.service;

import java.util.List;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import dev.jeremymichael.Stats360.model.Dota.*;

@Service
public class DotaService extends GameService{
    DotaService() {
        API_URL = "https://api.opendota.com/api/players/";
    }

    public DotaStats dotaPlayerStats(String steamId) {
        String url = API_URL + steamId + "/wL";
        ResponseEntity<WL> wL = exchange(
                url,
                HttpMethod.GET,
                new ParameterizedTypeReference<WL>() {}
        );

        url = API_URL + steamId + "/heroes";
        ResponseEntity<List<Hero>> heroes = exchange(
                url,
                HttpMethod.GET,
                new ParameterizedTypeReference<List<Hero>>() {}
        );

        DotaStats dotaStats = new DotaStats(wL.getBody(), heroes.getBody());
        return dotaStats;
    }
}
