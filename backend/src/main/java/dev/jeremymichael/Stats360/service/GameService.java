package dev.jeremymichael.Stats360.service;

import org.springframework.http.*;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.web.client.RestTemplate;

public abstract class GameService {
    protected final RestTemplate restTemplate = new RestTemplate();
    protected String API_URL;
    protected String AUTH_TOKEN;

    protected <T> ResponseEntity<T> exchange(String url, HttpMethod method, HttpEntity<String> entity, ParameterizedTypeReference<T> responseType) {
        return restTemplate.exchange(url, method, entity, responseType);
    }

    protected <T> ResponseEntity<T> exchange(String url, HttpMethod method, ParameterizedTypeReference<T> responseType) {
        return restTemplate.exchange(url, method, null, responseType);
    }
}