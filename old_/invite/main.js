(function () {
    'use strict';
    var inviteId = "sE3Wkdq",
        e = document.createElement("p"),
        xhr = new XMLHttpRequest();
    xhr.open("GET", "https://discord.com/api/v8/invites/" + inviteId + "?with_counts=true");
    xhr.onload = function () {
        document.getElementsByClassName("guild-container")[0].appendChild(e);
        if (xhr.readyState === 4 && xhr.status === 200) {
            var resJSON = JSON.parse(xhr.responseText);
            document.getElementsByClassName("icon-container")[0].getElementsByTagName("img")[0].src = ("https://cdn.discordapp.com/icons/" + resJSON.guild.id + "/" + resJSON.guild.icon + ".gif");
            Array.prototype.slice.call(document.getElementsByClassName("count")).forEach(function (e, i) {
                e.getElementsByTagName("span")[0].innerText = resJSON[i === 0 ? "approximate_presence_count" : "approximate_member_count"];
            });
            var joinBtn = document.createElement("a");
            e.appendChild(joinBtn);
            joinBtn.classList.add("join-btn");
            joinBtn.innerHTML = "サーバーに参加する";
            joinBtn.href = ("https://discord.com/invite/" + inviteId);
        } else {
            e.classList.add("get-fail");
            [
                "招待リンク情報が正常に取得できませんでした。",
                "無効なリンクである可能性があります。",
                "お手数をおかけしますが、Discordで夕立改二#2068までご連絡ください。"
            ].forEach(function (v, i) {
                if (i > 0) e.appendChild(document.createElement("br"));
                var line = document.createElement("span");
                line.innerText = v;
                e.appendChild(line);
            });
        }
    };
    xhr.send();
})();