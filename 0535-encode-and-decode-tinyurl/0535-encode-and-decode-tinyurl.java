public class Codec {
    ReentrantLock lock;
    Map<String, String> map;
    static final String PREFIX_URL = "http://tinyurl.com/";
    String base62CharSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    public Codec() {
        this.map = new HashMap();
        lock = new ReentrantLock();
    }

    String getId() {
        char[] id = new char[5];
        for(int i=0; i<5; i++) {
            int idx = (int) Math.floor(Math.random() * 62);
            id[i] = base62CharSet.charAt(idx);
        }
        String str = String.valueOf(id);
        if(map.containsKey(str)) {
            return getId();
        }
        return str;
    }

    // Encodes a URL to a shortened URL.
    public String encode(String longUrl) {
        lock.lock();
        String id = getId();
        String shortUrl = new StringBuilder(PREFIX_URL).append(id).toString();
        map.put(shortUrl, longUrl);
        lock.unlock();
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