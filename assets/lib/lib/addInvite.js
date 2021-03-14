'use strict';
function addInvite(inviteId, h) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://discord.com/api/v8/invites/' + inviteId + '?with_counts=true');
    xhr.onload = function () {
        var holder = document.createElement('div');
        (h || document.body).appendChild(holder);
        holder.style.padding = '0.75em';
        holder.style.display = 'inline-block';
        holder.style.borderRadius = '10px';
        holder.style.boxShadow = '0px 0px 10px 0px #000000 inset';
        holder.style.color = '#d3d3d3';
        holder.style.backgroundColor = '#2e2e2e';
        function fail() {
            var container = document.createElement('p');
            holder.appendChild(container);
            container.style.fontSize = '12px';
            var span = document.createElement('span');
            container.appendChild(span);
            span.textContent = '招待リンクが正常に取得できませんでした。';
            container.appendChild(document.createElement('br'));
            span = document.createElement('span');
            container.appendChild(span);
            span.textContent = 'お手数をおかけしますが、Discordで';
            var contact = document.createElement('span');
            container.appendChild(contact);
            contact.textContent = '夕立改二#2068';
            contact.style.fontWeight = 'bold';
            contact.style.color = '#ed143d';
            span = document.createElement('span');
            container.appendChild(span);
            span.textContent = 'までご連絡ください。';
        }
        if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 400)) {
            var res = JSON.parse(xhr.response),
                container = document.createElement('div');
            holder.appendChild(container);
            container.style.display = 'flex';
            container.style.alignItems = 'center';
            var guildIcon = document.createElement('img');
            container.appendChild(guildIcon);
            guildIcon.src = [
                'https://cdn.discordapp.com/icons/',
                res.guild.id + '/' + res.guild.icon + '.',
                res.guild.features.indexOf('ANIMATED_ICON') > -1 ? 'gif' : 'png'
            ].join('');
            guildIcon.alt = '荒らし連合Discordサーバーアイコン';
            guildIcon.style.width = '64px';
            guildIcon.style.height = '64px';
            guildIcon.style.borderRadius = '15px';
            guildIcon.style.verticalAlign = 'middle';
            var infoContainer = document.createElement('div');
            container.appendChild(infoContainer);
            infoContainer.style.marginLeft = '0.5em';
            var guildLabel = document.createElement('div');
            infoContainer.appendChild(guildLabel);
            guildLabel.textContent = res.guild.name;
            guildLabel.style.fontWeight = 'bold';
            guildLabel.style.whiteSpace = 'nowrap';
            guildLabel.style.maxWidth = '25vw';
            guildLabel.style.textOverflow = 'ellipsis';
            guildLabel.style.overflow = 'hidden';
            guildLabel.style.color = '#ffffff';
            var countWrapper = document.createElement('div');
            infoContainer.appendChild(countWrapper);
            countWrapper.style.display = 'flex';
            countWrapper.style.alignItems = 'center';
            [document.createElement('div'), document.createElement('div')].forEach(function (e, i) {
                countWrapper.appendChild(e);
                e.style.display = 'flex';
                e.style.alignItems = 'center';
                if (i > 0) e.style.marginLeft = '0.5em';
                var countIcon = document.createElement('div');
                e.appendChild(countIcon);
                countIcon.style.minWidth = '10px';
                countIcon.style.minHeight = '10px';
                countIcon.style.borderRadius = '50%';
                countIcon.style.backgroundColor = i > 0 ? '#d3d3d3' : '#00ff00';
                var countLabel = document.createElement('span');
                e.appendChild(countLabel);
                countLabel.textContent = res['approximate_' + (i > 0 ? 'member' : 'presence') + '_count'];
                countLabel.style.marginLeft = '0.25em';
            });
            var joinBtn = document.createElement('a');
            holder.appendChild(joinBtn);
            joinBtn.textContent = '参加する';
            joinBtn.href = 'https://discord.com/invite/' + inviteId;
            joinBtn.target = '_blank';
            joinBtn.rel = 'noopener noreferrer';
            joinBtn.style.marginTop = '0.5em';
            joinBtn.style.display = 'block';
            joinBtn.style.borderRadius = '5px';
            joinBtn.style.textDecoration = 'none';
            joinBtn.style.textAlign = 'center';
            joinBtn.style.color = '#ffffff';
            joinBtn.style.backgroundColor = '#ed143d';
        } else fail();
    };
    xhr.send();
}