package dev.jeremymichael.Stats360.service;

import dev.jeremymichael.Stats360.model.riot.Champion;
import dev.jeremymichael.Stats360.model.riot.ChampionInterpreter;
import dev.jeremymichael.Stats360.model.riot.ChampionInterpreterContext;
import dev.jeremymichael.Stats360.model.riot.RiotAccout;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RiotService extends GameService {
    public RiotService() {
        AUTH_TOKEN = "RGAPI-6b2ebcf9-e7f3-494a-9907-a1bd19591fb9";
    }

    private String PUUID(String riotId) {
        String[] parts = riotId.split("#", 2);
        String url = "https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/" + parts[0] + "/" + parts[1];
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-Riot-Token", AUTH_TOKEN);
        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<RiotAccout> account = exchange(
                url,
                HttpMethod.GET,
                entity,
                new ParameterizedTypeReference<RiotAccout>() {}
        );

        return account.getBody().getPuuid();
    }

    public List<Champion> champions(String riotId) {
        String url = "https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/" + this.PUUID(riotId);
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-Riot-Token", AUTH_TOKEN);
        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<List<Champion>> champions = exchange(
                url,
                HttpMethod.GET,
                entity,
                new ParameterizedTypeReference<List<Champion>>() {}
        );

        List<Champion> allChampStats = champions.getBody();
        ChampionInterpreter interpreter = new ChampionInterpreter(ChampionInterpreterContext.getInstance());
        interpreter.interpret(allChampStats);

        return allChampStats;
    }
}