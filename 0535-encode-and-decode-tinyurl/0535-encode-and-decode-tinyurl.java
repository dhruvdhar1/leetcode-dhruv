public class Codec {
    Map<String, String> map;
    static final String PREFIX_URL = "http://tinyurl.com/";

    public Codec() {
        this.map = new HashMap();

    }

    // Encodes a URL to a shortened URL.
    public String encode(String longUrl) {
        String id = new StringBuilder("id-").append(map.size()).toString();
        String shortUrl = new StringBuilder(PREFIX_URL).append(id).toString();
        map.put(shortUrl, longUrl);
        return shortUrl;
    }

    // Decodes a shortened URL to its original URL.
    public String decode(String shortUrl) {
        String longUrl = map.get(shortUrl);
        return longUrl;
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.decode(codec.encode(url));